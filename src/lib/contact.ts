import type { ContactSubmission } from '@/types';

const WEB3FORMS_API = 'https://api.web3forms.com/submit';
const RECIPIENT_EMAIL = 'andrewnicolesanosa@gmail.com';

export type ContactErrorBody = {
  error?: string;
  code?: string;
  details?: unknown;
};

export class ContactSendError extends Error {
  constructor(
    message: string,
    public details?: ContactErrorBody,
  ) {
    super(message);
    this.name = 'ContactSendError';
  }
}

export async function sendContactMessage(
  submission: ContactSubmission,
): Promise<void> {
  const accessKey = (import.meta.env.VITE_WEB3FORMS_ACCESS_KEY as string | undefined)?.trim();

  if (!accessKey) {
    throw new ContactSendError(
      `The contact form is not configured yet. Please email me directly at ${RECIPIENT_EMAIL}.`,
      { code: 'missing_access_key' },
    );
  }

  try {
    const response = await fetch(WEB3FORMS_API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        subject: `New ${submission.projectType} inquiry from ${submission.name}`,
        name: submission.name,
        email: submission.email,
        message: submission.message,
        project_type: submission.projectType,
        from_name: submission.name,
        replyto: submission.email,
      }),
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ContactSendError(`I couldn't send your message just now. Please email me directly at ${RECIPIENT_EMAIL}.`, {
        code: 'submission_failed',
        details: error,
      });
    }

    const result = await response.json();
    if (result.success !== true) {
      throw new ContactSendError(`I couldn't send your message just now. Please email me directly at ${RECIPIENT_EMAIL}.`, {
        code: 'submission_error',
        details: result,
      });
    }
  } catch (err) {
    if (err instanceof ContactSendError) {
      throw err;
    }

    throw new ContactSendError(`I couldn't send your message just now. Please email me directly at ${RECIPIENT_EMAIL}.`, {
      code: 'unknown_error',
    });
  }
}
