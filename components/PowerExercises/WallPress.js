import VideoStyles from '../../stylesheets/Video.module.css';

const WallPress = () => (
  <>
    <div className={VideoStyles.videoResponsive}>
      <video width="368" height="656" controls>
        <source src="https://res.cloudinary.com/mimas-music/video/upload/v1587250226/San%20Soo%20Fit/merv368x656.mov" type="video/mp4" />
        {/* <source src="movie.ogg" type="video/ogg"> */}
        Your browser does not support the video tag.
      </video>
    </div>
  </>
);

export default WallPress;
