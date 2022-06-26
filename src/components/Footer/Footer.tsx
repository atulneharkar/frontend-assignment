import "./Footer.scss";

function Footer() {
  return (
    <div className="bg-gray-100 flex">
      <div className="xl:container mx-auto px-6 w-full">
        <div className="text-gray-400 text-sm flex justify-between pt-4 mb-8 mobile:block mobile:text-center border-t border-t-slate-300 border-t-solid">
          <p className="mobile:mb-3">
            &#169; 2022 CompanyX Pvt Ltd. All rights reserved.
          </p>
          <p>
            <a href="mailto:assignment.candidate@companyx.com">Contact Us</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
