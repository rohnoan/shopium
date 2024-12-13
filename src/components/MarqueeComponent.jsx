import React, { useEffect } from "react";

const MarqueeEffect = () => {
  useEffect(() => {
    const marqueeText = document.querySelectorAll(".marquee_text");
    marqueeText.forEach((text) => {
      text.style.animation = "marquee 16s infinite linear";
    });
  }, []);

  const containerStyle = {
    width: "100%",
    padding: "3em 1em",
    position: "relative",
    zIndex: 1, // Ensure this doesn't overlap higher-level elements
  };

  const marqueeStyle = {
    position: "relative",
    width: "100%",
    height: "2em",
    fontSize: "5em",
    display: "grid",
    placeItems: "center",
    overflow: "hidden",
  };

  const marqueeTextStyle = {
    position: "absolute",
    minWidth: "100%",
    whiteSpace: "nowrap",
    animation: "marquee 16s infinite linear",
  };

  const marqueeBlurStyle = {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
    backgroundColor: "transparent",
    backgroundImage:
      "linear-gradient(to right, white, 1rem, transparent 50%), linear-gradient(to left, white, 1rem, transparent 50%)",
    filter: "contrast(15)",
  };

  const marqueeClearStyle = {
    position: "absolute",
    inset: 0,
    display: "grid",
    placeItems: "center",
  };

  const textStyle = {
    marginBlock: "2em",
    fontSize: "1.5em",
    textAlign: "center",
  };

  const keyframesStyle = `
    @keyframes marquee {
      from { transform: translateX(100%); }
      to { transform: translateX(-100%); }
    }
  `;

  return (
    <div className="mb-[10px]" style={containerStyle}>
      <style>{keyframesStyle}</style>
      <div style={marqueeStyle}>
        <div style={marqueeBlurStyle} aria-hidden="true">
          <p className="marquee_text" style={{ filter: "blur(0.07em)" }}>
            SHOP BOLD. LIVE BOLD. SHOP SHOPIUM.
          </p>
        </div>
        <div style={marqueeClearStyle}>
          <p className="marquee_text">SHOP BOLD. LIVE BOLD. SHOP SHOPIUM.</p>
        </div>
      </div>

      <p style={textStyle}></p>
    </div>
  );
};

export default MarqueeEffect;
