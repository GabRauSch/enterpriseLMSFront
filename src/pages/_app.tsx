// pages/_app.tsx
import { AppProps } from "next/app";
// import "../styles/home.css";
// import "../styles/login.css";
// import "../styles/myCompany.css";
// import "../styles/register.css";
// import "../styles/video-course.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
