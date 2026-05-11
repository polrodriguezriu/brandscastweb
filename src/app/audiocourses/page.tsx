import { permanentRedirect } from "next/navigation";

export default function AudiocoursesRedirect() {
  permanentRedirect("/tracks/");
}
