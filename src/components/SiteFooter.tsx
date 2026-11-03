import { profile } from "../data";
import Brand from "./Brand";

export default function SiteFooter() {
  return (
    <footer className="footer container">
      <Brand />
      <span>Designed &amp; built with care by {profile.name}</span>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
