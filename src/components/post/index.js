import React from "react";
import "./styles.scss";

export default function Post({
  imgSrc,
  imgLabel,
  dateString,
  title,
  children,
}) {
  return (
    <div className="post">
      <img src={imgSrc} alt="fundo post" />
      <label>
        {imgLabel}
        <br /> {dateString}
      </label>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
