import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type ResumeLinkProps = Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "href" | "target" | "download" | "rel"
> & {
  children: ReactNode;
};

function openAndDownloadResume(event: MouseEvent<HTMLAnchorElement>) {
  if (
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  event.preventDefault();
  const resumeUrl = event.currentTarget.href;
  window.open(resumeUrl, "_blank", "noopener,noreferrer");

  const downloadLink = document.createElement("a");
  downloadLink.href = resumeUrl;
  downloadLink.download = "Raushan_masai_mern.pdf";
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();
  downloadLink.remove();
}

export default function ResumeLink({
  className = "",
  children,
  onClick,
  ...props
}: ResumeLinkProps) {
  return (
    <a
      className={className}
      href="/Raushan_masai_mern.pdf"
      target="_blank"
      rel="noreferrer"
      download="Raushan_masai_mern.pdf"
      onClick={(event) => {
        openAndDownloadResume(event);
        onClick?.(event);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
