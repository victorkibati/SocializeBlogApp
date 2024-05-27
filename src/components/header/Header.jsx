import "./header.css";

export default function Header() {
  return (
    <div className="header">

        <div className="headerTitles">
          <span className="headerTitleSm">Award Winning</span>
          <span className="headerTitleLg">#1 Social Blog App </span>
        </div>
        <img
          className="headerImg"
          src="https://images.unsplash.com/photo-1579869847557-1f67382cc158?q=80&w=1334&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="social media"
        />
      </div>
  );
}