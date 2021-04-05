import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";
function Wellcome(props) {
  return (
    <section className="wellcome">
      <div className="wellcome__content">
        <h1>
          Nghe đa chiều, <br /> sống đa sắc
        </h1>
        <p>Hàng triệu bài hát và podcast. Không cần thẻ tín dụng.</p>
        <Link>TẢI SPOTIFY MIỄN PHÍ</Link>
      </div>
    </section>
  );
}
export default Wellcome;
