import FooterStyles from './Footer.module.css';
// import KWelPasoLogo from '../../assets/KellerWilliams_Realty_ElPaso_Logo_GRY-rev copy.png';

const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <div className={FooterStyles.privacy}>
        <a href='https://www.privacypolicies.com/privacy/view/705bcc2bf2e61c92ed7d6ca7eab1b0e6' target='_blank'>Privacy Policy</a>
      </div>
    </div>
  );
}

export default Footer;
