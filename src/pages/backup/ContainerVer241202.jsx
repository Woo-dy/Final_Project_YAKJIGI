import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/Container.css";

gsap.registerPlugin(ScrollTrigger);

function Container() {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const scrollWrapper = wrapperRef.current;

    if (!container || !scrollWrapper) {
      console.error("Container or scroll-wrapper not found!");
      return;
    }

    // 수직 높이 계산 (추가 콘텐츠 포함)
    const scrollLength = scrollWrapper.scrollWidth;
    const additionalHeight = document.querySelector(".additional-content").offsetHeight;
    container.style.height = `${scrollLength - window.innerWidth + window.innerHeight + additionalHeight}px`;

    // ScrollTrigger 세팅
    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: () => `+=${scrollLength - window.innerWidth}`,
      scrub: true,
      pin: container,
      pinSpacing: false, // 여백 자동 생성 방지
    });

    gsap.to(scrollWrapper, {
      x: () => `-${scrollLength - window.innerWidth}px`,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${scrollLength - window.innerWidth}`,
        scrub: true,
      },
    });

    console.log("Calculated height:", container.style.height);

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <>
      <div className="scroll-container" ref={containerRef}>
        <div className="scroll-wrapper" ref={wrapperRef}>
          <div className="panel">
            <p>Panel 1</p>
          </div>
          <div className="panel">
            <p>Panel 2</p>
          </div>
          <div className="panel">
            <p>Panel 3</p>
          </div>
          <div className="panel">
            <p>Panel 4</p>
          </div>
        </div>
      </div>
      {/* 추가 콘텐츠 */}
      <div className="additional-content">
        <p>추가 콘텐츠</p>
      </div>
    </>
  );
}

export default Container;
