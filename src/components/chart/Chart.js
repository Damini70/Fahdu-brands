/* eslint-disable @next/next/no-img-element */
import style from "../creator/Creator.module.css";
function Chart() {
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 shadow-xl">
          <p>PERSONAL INFORMATION</p>
          <figure className="px-10 pt-10">
            <img src={"images/alica.svg"} alt="Shoes" className="rounded-xl" />
          </figure>
        </div>
        <div className="card-body items-center text-center">
          <div className={style.creators_niche}>
            <span>Music & Dance</span>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default Chart;
