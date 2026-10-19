interface DonationGoogleFormProps {
  formUrl: string;
  receiptSlaDays: number;
}

function toEmbedUrl(url: string): string {
  const trimmed = url.trim();
  if (trimmed.includes("embedded=true")) return trimmed;
  if (trimmed.includes("/viewform")) {
    const base = trimmed.split("?")[0];
    return `${base}?embedded=true`;
  }
  return trimmed;
}

export default function DonationGoogleForm({
  formUrl,
  receiptSlaDays,
}: DonationGoogleFormProps) {
  if (!formUrl) {
    return (
      <div className="rounded-xl border border-orange/20 bg-cream p-6 text-center">
        <p className="text-gray-700 text-sm leading-relaxed">
          The donation confirmation form is being connected. Meanwhile, email
          your name, amount, date, and UTR to{" "}
          <a
            href="mailto:prasannapattnaiktrust@gmail.com?subject=Donation%20Confirmation"
            className="text-orange font-semibold hover:underline"
          >
            prasannapattnaiktrust@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  const embedUrl = toEmbedUrl(formUrl);
  const openUrl = formUrl.includes("/viewform")
    ? formUrl.split("?")[0]
    : formUrl;

  return (
    <div className="space-y-4">
      <p className="text-center text-sm text-gray-500">
        Responses go to the trust&apos;s Google Form inbox (and email
        notifications, if enabled). We verify the transfer, then email your
        80G receipt within {receiptSlaDays} working days.
      </p>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <iframe
          title="Donation confirmation form"
          src={embedUrl}
          className="w-full border-0"
          style={{ minHeight: "1100px" }}
        >
          Loading…
        </iframe>
      </div>
      <p className="text-center text-sm text-gray-500">
        Form not loading?{" "}
        <a
          href={openUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-orange font-semibold hover:underline"
        >
          Open the Google Form in a new tab
        </a>
      </p>
    </div>
  );
}
