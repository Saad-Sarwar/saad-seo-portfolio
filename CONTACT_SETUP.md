# Contact form setup (required for live email delivery)

1. Create a Resend account at https://resend.com and verify a domain you control.
2. Create an API key.
3. In Vercel → Project → Settings → Environment Variables add `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (e.g. `Portfolio <contact@your-verified-domain.com>`).
4. Redeploy the project and submit a test inquiry.

Without these variables, the contact form displays a clear configuration error instead of pretending to send. The API sends inquiries to `saadsarwar93@gmail.com`, with the visitor's address as reply-to. Consider adding spam protection (e.g. Turnstile) before public launch.
