import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";

function Footer() {

  return (

    <footer className="
      relative
      overflow-hidden
      bg-[#070B1A]
      border-t
      border-[#111827]
    ">

      {/* GLOW */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-125
        h-55
        bg-[#8B5CF6]/10
        blur-[130px]
      "></div>

      <div className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
        pt-16
        pb-8
      ">

        {/* TOP */}
        <div className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-12
        ">

          {/* BRAND */}
          <div>

            {/* LOGO */}
            <div className="
              flex
              items-center
              gap-3
            ">

              <div className="
                w-12
                h-12
                rounded-2xl
                bg-linear-to-br
                from-[#8B5CF6]
                to-[#6366f1]
                flex
                items-center
                justify-center
                shadow-lg
                shadow-[#8B5CF6]/20
              ">

                <span className="
                  text-white
                  font-black
                  text-lg
                ">
                  T
                </span>

              </div>

              <div>

                <h1 className="
                  text-xl
                  font-black
                  text-white
                ">
                  TBP
                </h1>

                <p className="
                  text-[10px]
                  uppercase
                  tracking-[3px]
                  text-gray-400
                ">
                  The Boring Personality
                </p>

              </div>

            </div>

            {/* DESC */}
            <p className="
              text-gray-400
              text-sm
              leading-relaxed
              mt-6
              max-w-sm
            ">

              Premium self improvement platform
              helping people improve confidence,
              mindset, communication, fitness,
              grooming, and social skills.

            </p>

            {/* SOCIAL */}
            <div className="
              flex
              items-center
              gap-3
              mt-7
            ">

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#111827]
                  border
                  border-[#1f2937]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#8B5CF6]
                  transition-all
                  duration-300
                "
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#111827]
                  border
                  border-[#1f2937]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#8B5CF6]
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={17} />
              </a>

              <a
                href="#"
                className="
                  w-11
                  h-11
                  rounded-xl
                  bg-[#111827]
                  border
                  border-[#1f2937]
                  flex
                  items-center
                  justify-center
                  text-gray-400
                  hover:text-white
                  hover:border-[#8B5CF6]
                  transition-all
                  duration-300
                "
              >
                <FaDiscord size={17} />
              </a>

            </div>

          </div>

          {/* LINKS */}
          <div>

            <h2 className="
              text-white
              text-lg
              font-bold
              mb-6
            ">
              Quick Links
            </h2>

            <ul className="
              space-y-4
              text-sm
              text-gray-400
            ">

              <li>
                <Link to="/" className="hover:text-[#A78BFA] transition duration-300">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#A78BFA] transition duration-300">
                  About
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-[#A78BFA] transition duration-300">
                  Categories
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-[#A78BFA] transition duration-300">
                  Curriculum
                </Link>
              </li>

            </ul>

          </div>

          {/* CATEGORIES */}
          <div>

            <h2 className="
              text-white
              text-lg
              font-bold
              mb-6
            ">
              Categories
            </h2>

            <ul className="
              space-y-4
              text-sm
              text-gray-400
            ">

              <li>
                <Link to="/mindset" className="hover:text-[#A78BFA] transition duration-300">
                  Mindset & Motivation
                </Link>
              </li>

              <li>
                <Link to="/grooming" className="hover:text-[#A78BFA] transition duration-300">
                  Grooming & Appearance
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-[#A78BFA] transition duration-300">
                  Confidence Development
                </Link>
              </li>

              <li>
                <Link to="/categories" className="hover:text-[#A78BFA] transition duration-300">
                  Communication Skills
                </Link>
              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="
          mt-14
          pt-6
          border-t
          border-[#111827]
          flex
          flex-col
          md:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="
            text-gray-500
            text-xs
          ">
            © 2026 The Boring Personality. All rights reserved.
          </p>

          <div className="
            flex
            items-center
            gap-5
            text-xs
            text-gray-500
          ">

            <span className="
              hover:text-white
              cursor-pointer
              transition
              duration-300
            ">
              Privacy Policy
            </span>

            <span className="
              hover:text-white
              cursor-pointer
              transition
              duration-300
            ">
              Terms & Conditions
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;