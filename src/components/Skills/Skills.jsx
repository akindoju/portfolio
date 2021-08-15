import React, { useEffect } from "react";
import WOW from "wowjs";
import "./Skills.scss";

const Skills = () => {
  useEffect(() => {
    const wow = new WOW.WOW();
    wow.init();
  }, []);

  return (
    <section className="skills" id="skills">
      <h1 className="sectionTitle">Skills</h1>

      <div className="skills__content">
        <div className="skills__details wow fadeIn" data-wow-delay="0.1s">
          <svg
            className="skills__details--icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>html5</title>
            <path
              fill="#e34f26"
              d="M2 0h28l-2.547 28.751-11.484 3.249-11.419-3.251zM11.375 13l-0.309-3.624 13.412 0.004 0.307-3.496-17.568-0.004 0.931 10.68h12.168l-0.435 4.568-3.88 1.072-3.94-1.080-0.251-2.813h-3.479l0.44 5.561 7.229 1.933 7.172-1.924 0.992-10.876z"
            ></path>
          </svg>

          <h4 className="skills__details--name ">HTML5</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.1s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>javascript</title>
            <path
              fill="#f7df1e"
              d="M0 0h32v32h-32zM29.379 24.368c-0.233-1.46-1.184-2.687-4.004-3.831-0.981-0.46-2.072-0.78-2.396-1.52-0.121-0.44-0.14-0.68-0.061-0.94 0.2-0.861 1.22-1.12 2.020-0.88 0.52 0.16 1 0.56 1.301 1.2 1.379-0.901 1.379-0.901 2.34-1.5-0.36-0.56-0.539-0.801-0.781-1.040-0.84-0.94-1.959-1.42-3.779-1.379l-0.94 0.119c-0.901 0.22-1.76 0.7-2.28 1.34-1.52 1.721-1.081 4.721 0.759 5.961 1.82 1.36 4.481 1.659 4.821 2.94 0.32 1.56-1.16 2.060-2.621 1.88-1.081-0.24-1.68-0.781-2.34-1.781l-2.44 1.401c0.28 0.64 0.6 0.919 1.080 1.479 2.32 2.341 8.12 2.221 9.161-1.339 0.039-0.12 0.32-0.94 0.099-2.2zM17.401 14.708h-2.997c0 2.584-0.012 5.152-0.012 7.74 0 1.643 0.084 3.151-0.184 3.615-0.44 0.919-1.573 0.801-2.088 0.64-0.528-0.261-0.796-0.621-1.107-1.14-0.084-0.14-0.147-0.261-0.169-0.261l-2.433 1.5c0.407 0.84 1 1.563 1.765 2.023 1.14 0.68 2.672 0.9 4.276 0.54 1.044-0.301 1.944-0.921 2.415-1.881 0.68-1.24 0.536-2.76 0.529-4.461 0.016-2.739 0-5.479 0-8.239z"
            ></path>
          </svg>

          <h4 className="skills__details--name">Javascript</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.2s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>css3</title>
            <path
              fill="#1572b6"
              d="M2 0h28l-2.547 28.751-11.484 3.249-11.42-3.251zM24.787 5.884l-17.573-0.004 0.284 3.496 13.5 0.003-0.34 3.621h-8.853l0.32 3.431h8.243l-0.488 4.697-3.88 1.072-3.941-1.080-0.251-2.813h-3.48l0.387 5.14 7.287 2.271 7.164-2.040z"
            ></path>
          </svg>

          <h4 className="skills__details--name">CSS3</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.3s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>react</title>
            <path
              fill="#61dafb"
              d="M16 13.148c-1.575 0-2.852 1.277-2.852 2.852s1.277 2.852 2.852 2.852v0c1.575 0 2.852-1.277 2.852-2.852s-1.277-2.852-2.852-2.852v0zM8.011 21.673l-0.629-0.16c-4.691-1.185-7.381-3.197-7.381-5.519s2.691-4.333 7.381-5.519l0.629-0.159 0.177 0.624c0.545 1.86 1.163 3.443 1.899 4.957l-0.082-0.186 0.135 0.284-0.135 0.284c-0.656 1.329-1.275 2.912-1.761 4.551l-0.056 0.22zM7.089 11.933c-3.565 1.001-5.753 2.533-5.753 4.061 0 1.527 2.188 3.059 5.753 4.061 0.512-1.62 1.046-2.965 1.662-4.263l-0.086 0.202c-0.531-1.098-1.066-2.443-1.511-3.828l-0.065-0.234zM23.989 21.673l-0.177-0.625c-0.544-1.859-1.162-3.441-1.9-4.954l0.081 0.184-0.135-0.284 0.135-0.284c0.656-1.329 1.275-2.911 1.762-4.55l0.056-0.221 0.177-0.624 0.631 0.159c4.689 1.185 7.38 3.197 7.38 5.52s-2.691 4.333-7.38 5.519zM23.335 15.995c0.64 1.385 1.169 2.747 1.576 4.061 3.567-1.003 5.753-2.535 5.753-4.061 0-1.528-2.188-3.059-5.753-4.061-0.511 1.619-1.045 2.963-1.662 4.262l0.086-0.2zM7.080 11.927l-0.177-0.623c-1.319-4.648-0.919-7.979 1.097-9.141 1.977-1.141 5.152 0.207 8.479 3.621l0.453 0.465-0.453 0.465c-1.146 1.19-2.207 2.482-3.162 3.853l-0.068 0.103-0.18 0.257-0.313 0.027c-1.875 0.151-3.596 0.439-5.264 0.86l0.218-0.047zM9.608 3.087c-0.357 0-0.673 0.077-0.94 0.231-1.325 0.764-1.56 3.42-0.647 7.004 1.21-0.285 2.681-0.521 4.18-0.658l0.131-0.010c0.894-1.264 1.792-2.37 2.756-3.414l-0.020 0.022c-2.080-2.025-4.049-3.175-5.46-3.175zM22.393 30.236c-0.001 0-0.001 0 0 0-1.9 0-4.34-1.431-6.872-4.031l-0.453-0.465 0.453-0.465c1.146-1.19 2.206-2.482 3.16-3.854l0.068-0.103 0.18-0.257 0.312-0.027c1.875-0.15 3.597-0.438 5.267-0.858l-0.218 0.046 0.629-0.159 0.179 0.624c1.316 4.645 0.917 7.977-1.099 9.139-0.449 0.259-0.988 0.411-1.562 0.411-0.016 0-0.031-0-0.047-0l0.002 0zM16.932 25.728c2.080 2.025 4.049 3.175 5.46 3.175h0.001c0.356 0 0.673-0.077 0.939-0.231 1.325-0.764 1.561-3.421 0.647-7.005-1.212 0.286-2.682 0.522-4.182 0.658l-0.13 0.010c-0.893 1.265-1.791 2.371-2.755 3.416l0.020-0.022zM24.92 11.927l-0.629-0.159c-1.453-0.376-3.175-0.664-4.939-0.806l-0.111-0.007-0.312-0.027-0.18-0.257c-1.021-1.474-2.082-2.766-3.237-3.966l0.009 0.010-0.453-0.465 0.453-0.465c3.325-3.413 6.499-4.761 8.479-3.621 2.016 1.163 2.416 4.493 1.099 9.14zM19.667 9.653c1.523 0.139 2.969 0.364 4.312 0.668 0.915-3.584 0.679-6.24-0.647-7.004-1.317-0.761-3.793 0.405-6.4 2.944 0.943 1.022 1.841 2.128 2.666 3.289l0.069 0.103zM9.608 30.236c-0.014 0-0.030 0-0.046 0-0.574 0-1.113-0.152-1.577-0.419l0.015 0.008c-2.016-1.161-2.416-4.492-1.097-9.139l0.176-0.624 0.629 0.159c1.54 0.388 3.239 0.661 5.047 0.812l0.313 0.027 0.179 0.257c1.022 1.475 2.083 2.767 3.239 3.967l-0.010-0.010 0.453 0.465-0.453 0.465c-2.531 2.6-4.971 4.031-6.868 4.031zM8.021 21.667c-0.915 3.584-0.679 6.241 0.647 7.005 1.316 0.751 3.791-0.407 6.4-2.944-0.943-1.022-1.841-2.129-2.667-3.29l-0.069-0.103c-1.629-0.146-3.099-0.382-4.534-0.711l0.224 0.043zM16 22.504c-1.097 0-2.225-0.048-3.355-0.141l-0.313-0.027-0.18-0.257c-0.544-0.768-1.139-1.691-1.697-2.639l-0.103-0.19c-0.452-0.758-0.971-1.732-1.45-2.728l-0.105-0.243-0.133-0.284 0.133-0.284c0.584-1.239 1.102-2.212 1.658-3.161l-0.103 0.191c0.552-0.955 1.159-1.907 1.8-2.829l0.18-0.257 0.313-0.027c1.005-0.090 2.174-0.142 3.355-0.142s2.35 0.052 3.505 0.153l-0.15-0.011 0.312 0.027 0.179 0.257c1.177 1.666 2.294 3.567 3.252 5.56l0.104 0.24 0.135 0.284-0.135 0.284c-1.058 2.232-2.176 4.133-3.439 5.925l0.083-0.125-0.179 0.257-0.312 0.027c-1.129 0.093-2.259 0.141-3.356 0.141zM13.071 21.059c1.973 0.148 3.885 0.148 5.86 0 1.004-1.445 1.978-3.104 2.827-4.836l0.101-0.228c-0.947-1.958-1.922-3.617-3.012-5.19l0.083 0.126c-0.877-0.071-1.898-0.111-2.929-0.111s-2.052 0.040-3.063 0.119l0.134-0.008c-1.008 1.447-1.983 3.106-2.83 4.84l-0.099 0.224c0.951 1.96 1.926 3.619 3.014 5.193l-0.085-0.13z"
            ></path>
          </svg>

          <h4 className="skills__details--name">React JS</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.4s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>sass</title>
            <path
              fill="#c69"
              d="M16 0c8.836 0 16 7.164 16 16s-7.164 16-16 16-16-7.164-16-16 7.164-16 16-16zM12.82 21.331c0.233 0.86 0.208 1.664-0.032 2.389l-0.087 0.24c-0.032 0.081-0.069 0.16-0.104 0.235-0.187 0.387-0.435 0.747-0.74 1.080-0.931 1.012-2.229 1.396-2.787 1.073-0.6-0.349-0.301-1.78 0.779-2.92 1.161-1.224 2.827-2.012 2.827-2.012v-0.004zM26.035 6.849c-0.723-2.844-5.436-3.779-9.896-2.193-2.652 0.943-5.525 2.424-7.591 4.356-2.457 2.295-2.848 4.295-2.687 5.131 0.569 2.948 4.609 4.876 6.271 6.307v0.008c-0.489 0.24-4.075 2.039-4.915 3.9-0.9 1.96 0.14 3.361 0.82 3.54 2.1 0.581 4.26-0.48 5.42-2.199 1.12-1.681 1.021-3.841 0.539-4.901 0.661-0.18 1.44-0.26 2.44-0.139 2.801 0.32 3.361 2.080 3.24 2.8-0.12 0.719-0.697 1.139-0.899 1.259-0.2 0.121-0.26 0.16-0.241 0.241 0.020 0.12 0.121 0.12 0.28 0.1 0.22-0.040 1.461-0.6 1.521-1.961 0.060-1.72-1.581-3.639-4.5-3.6-1.2 0.021-1.961 0.121-2.5 0.341-0.040-0.060-0.081-0.1-0.14-0.14-1.8-1.94-5.14-3.3-5-5.88 0.040-0.94 0.38-3.419 6.4-6.419 4.94-2.461 8.881-1.78 9.561-0.28 0.977 2.139-2.101 6.12-7.241 6.699-1.96 0.22-2.98-0.539-3.241-0.82-0.279-0.3-0.319-0.32-0.419-0.259-0.16 0.080-0.060 0.34 0 0.5 0.16 0.4 0.78 1.1 1.861 1.46 0.939 0.3 3.24 0.479 6-0.6 3.099-1.199 5.519-4.54 4.819-7.34z"
            ></path>
          </svg>

          <h4 className="skills__details--name">Sass</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.5s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>git</title>
            <path
              fill="#f05032"
              d="M31.395 14.573l-13.972-13.971c-0.805-0.804-2.109-0.804-2.917 0l-2.895 2.9 3.68 3.68c0.86-0.287 1.839-0.093 2.519 0.588 0.688 0.687 0.877 1.677 0.584 2.533l3.544 3.547c0.86-0.297 1.849-0.104 2.533 0.58 0.961 0.96 0.961 2.512 0 3.472-0.959 0.959-2.508 0.959-3.467 0-0.719-0.721-0.899-1.783-0.539-2.661l-3.319-3.301v8.7c0.235 0.115 0.456 0.271 0.651 0.464 0.951 0.961 0.951 2.511 0 3.467-0.959 0.961-2.519 0.961-3.479 0-0.959-0.959-0.959-2.505 0-3.464 0.243-0.24 0.516-0.421 0.807-0.541v-8.785c-0.289-0.121-0.565-0.296-0.8-0.535-0.727-0.727-0.901-1.789-0.528-2.679l-3.616-3.633-9.581 9.575c-0.8 0.807-0.8 2.112 0 2.919l13.973 13.969c0.805 0.805 2.109 0.805 2.915 0l13.907-13.907c0.807-0.804 0.807-2.109 0-2.916z"
            ></path>
          </svg>

          <h4 className="skills__details--name">Git</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.6s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>mysql</title>
            <path
              fill="#4479a1"
              d="M21.873 7.568c-0.153 0-0.257 0.019-0.365 0.044v0.017h0.019c0.072 0.139 0.195 0.24 0.285 0.364 0.072 0.143 0.133 0.285 0.205 0.427l0.019-0.020c0.125-0.088 0.187-0.229 0.187-0.444-0.053-0.063-0.061-0.125-0.107-0.187-0.053-0.089-0.168-0.133-0.243-0.201zM7.693 25.16h-1.236c-0.040-2.083-0.164-4.040-0.36-5.88h-0.011l-1.88 5.88h-0.94l-1.867-5.88h-0.013c-0.137 1.764-0.224 3.724-0.26 5.88h-1.127c0.073-2.621 0.256-5.080 0.547-7.373h1.533l1.78 5.419h0.011l1.796-5.419h1.46c0.323 2.687 0.512 5.147 0.567 7.373zM13.049 19.72c-0.504 2.727-1.168 4.711-1.989 5.947-0.643 0.955-1.347 1.431-2.111 1.431-0.204 0-0.453-0.061-0.755-0.184v-0.659c0.147 0.023 0.32 0.035 0.515 0.035 0.357 0 0.644-0.1 0.863-0.296 0.263-0.24 0.393-0.509 0.393-0.807 0-0.207-0.103-0.627-0.307-1.259l-1.352-4.208h1.213l0.969 3.147c0.219 0.715 0.311 1.213 0.273 1.497 0.533-1.419 0.904-2.969 1.113-4.644zM29.483 25.16h-3.507v-7.373h1.18v6.467h2.327zM25.056 25.34l-1.355-0.667c0.12-0.101 0.236-0.211 0.34-0.333 0.577-0.675 0.864-1.677 0.864-3.004 0-2.44-0.957-3.661-2.873-3.661-0.939 0-1.672 0.309-2.2 0.929-0.573 0.677-0.861 1.675-0.861 2.993 0 1.296 0.253 2.248 0.765 2.853 0.467 0.547 1.169 0.82 2.111 0.82 0.352 0 0.675-0.044 0.967-0.131l1.767 1.029zM20.667 23.684c-0.3-0.48-0.449-1.253-0.449-2.315 0-1.857 0.565-2.787 1.693-2.787 0.591 0 1.027 0.223 1.303 0.667 0.299 0.483 0.448 1.248 0.448 2.297 0 1.872-0.565 2.811-1.693 2.811-0.593 0-1.027-0.223-1.301-0.673zM18.456 23.117c0 0.627-0.229 1.141-0.688 1.541s-1.071 0.6-1.845 0.6c-0.724 0-1.419-0.229-2.097-0.687l0.316-0.635c0.584 0.293 1.111 0.437 1.587 0.437 0.443 0 0.791-0.097 1.044-0.293 0.251-0.196 0.4-0.472 0.4-0.82 0-0.44-0.307-0.813-0.864-1.127-0.517-0.284-1.551-0.876-1.551-0.876-0.563-0.409-0.843-0.848-0.843-1.569 0-0.6 0.209-1.080 0.627-1.447 0.42-0.371 0.96-0.553 1.627-0.553 0.683 0 1.307 0.181 1.867 0.547l-0.284 0.635c-0.48-0.203-0.953-0.307-1.419-0.307-0.377 0-0.669 0.091-0.872 0.275-0.204 0.181-0.331 0.413-0.331 0.699 0 0.437 0.312 0.813 0.888 1.133 0.524 0.287 1.583 0.893 1.583 0.893 0.577 0.407 0.864 0.84 0.856 1.553zM30.965 15.315c-0.713-0.019-1.267 0.053-1.729 0.251-0.133 0.053-0.347 0.053-0.365 0.223 0.073 0.071 0.084 0.187 0.147 0.285 0.107 0.179 0.291 0.417 0.461 0.543 0.187 0.147 0.373 0.288 0.569 0.413 0.347 0.213 0.74 0.34 1.080 0.555 0.193 0.125 0.391 0.284 0.587 0.417 0.097 0.067 0.16 0.187 0.285 0.229v-0.027c-0.061-0.080-0.080-0.196-0.14-0.285-0.089-0.089-0.179-0.169-0.267-0.257-0.259-0.347-0.58-0.649-0.927-0.9-0.285-0.195-0.909-0.467-1.027-0.793l-0.017-0.019c0.195-0.017 0.427-0.088 0.613-0.141 0.303-0.080 0.58-0.063 0.893-0.141 0.141-0.036 0.284-0.080 0.427-0.125v-0.080c-0.16-0.16-0.28-0.377-0.445-0.527-0.453-0.393-0.956-0.776-1.472-1.097-0.28-0.179-0.635-0.293-0.929-0.445-0.107-0.053-0.285-0.080-0.347-0.169-0.16-0.195-0.253-0.453-0.367-0.685-0.256-0.491-0.507-1.033-0.729-1.551-0.16-0.349-0.257-0.697-0.453-1.017-0.92-1.516-1.916-2.435-3.448-3.333-0.329-0.187-0.724-0.267-1.141-0.365-0.223-0.011-0.445-0.027-0.667-0.036-0.147-0.063-0.288-0.232-0.413-0.313-0.507-0.32-1.819-1.013-2.192-0.096-0.24 0.579 0.356 1.149 0.563 1.443 0.153 0.204 0.347 0.437 0.453 0.667 0.063 0.155 0.080 0.313 0.143 0.475 0.141 0.392 0.276 0.829 0.463 1.196 0.097 0.187 0.204 0.383 0.329 0.551 0.072 0.097 0.195 0.143 0.223 0.303-0.125 0.181-0.133 0.445-0.205 0.667-0.32 1.009-0.195 2.257 0.259 3 0.143 0.221 0.483 0.712 0.937 0.524 0.4-0.16 0.312-0.667 0.427-1.113 0.027-0.107 0.009-0.177 0.064-0.249v0.020c0.125 0.251 0.251 0.489 0.365 0.74 0.275 0.437 0.755 0.891 1.156 1.193 0.213 0.16 0.383 0.437 0.649 0.536v-0.027h-0.020c-0.057-0.077-0.133-0.115-0.205-0.177-0.16-0.16-0.34-0.356-0.467-0.533-0.373-0.503-0.703-1.053-0.996-1.624-0.147-0.28-0.269-0.581-0.387-0.857-0.053-0.107-0.053-0.267-0.143-0.32-0.133 0.195-0.329 0.364-0.427 0.604-0.169 0.384-0.187 0.856-0.251 1.347-0.036 0.009-0.019 0-0.036 0.019-0.285-0.069-0.383-0.365-0.489-0.613-0.267-0.633-0.311-1.651-0.080-2.38 0.063-0.187 0.329-0.776 0.223-0.955-0.056-0.169-0.232-0.267-0.329-0.404-0.116-0.165-0.24-0.38-0.32-0.569-0.213-0.499-0.32-1.051-0.552-1.549-0.107-0.231-0.293-0.472-0.445-0.684-0.169-0.24-0.356-0.409-0.491-0.693-0.044-0.097-0.107-0.259-0.036-0.365 0.019-0.072 0.056-0.1 0.125-0.12 0.117-0.096 0.447 0.029 0.563 0.083 0.329 0.133 0.607 0.259 0.883 0.445 0.125 0.088 0.26 0.257 0.42 0.301h0.187c0.285 0.063 0.607 0.019 0.873 0.097 0.473 0.152 0.9 0.373 1.283 0.613 1.168 0.741 2.128 1.793 2.78 3.048 0.107 0.205 0.153 0.393 0.251 0.607 0.187 0.44 0.417 0.884 0.607 1.309 0.187 0.42 0.367 0.848 0.635 1.196 0.133 0.187 0.669 0.284 0.909 0.381 0.177 0.080 0.453 0.153 0.613 0.251 0.307 0.187 0.605 0.4 0.893 0.605 0.147 0.101 0.591 0.324 0.617 0.504z"
            ></path>
          </svg>

          <h4 className="skills__details--name">MySql</h4>
        </div>

        <div className="skills__details wow fadeIn" data-wow-delay="0.7s">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>Photoshop</title>
            <path
              fill="#00c8ff"
              d="M0 0.4v31.2h32v-31.2zM1.333 1.733h29.333v28.533h-29.333zM7.733 7.707c0-0.089 0.187-0.155 0.299-0.155 0.859-0.044 2.117-0.067 3.437-0.067 3.696 0 5.133 2.027 5.133 4.621 0 3.387-2.456 4.84-5.469 4.84-0.507 0-0.68-0.023-1.033-0.023v5.123c0 0.111-0.044 0.155-0.153 0.155h-2.059c-0.111 0-0.153-0.040-0.153-0.151zM10.1 14.789c0.307 0.021 0.549 0.021 1.080 0.021 1.56 0 3.027-0.549 3.027-2.661 0-1.693-1.048-2.552-2.829-2.552-0.528 0-1.033 0.021-1.276 0.044zM21.576 13.205c-1.056 0-1.408 0.528-1.408 0.968 0 0.484 0.24 0.813 1.649 1.54 2.091 1.013 2.749 1.98 2.749 3.409 0 2.133-1.627 3.28-3.827 3.28-1.168 0-2.16-0.244-2.733-0.573-0.087-0.044-0.107-0.109-0.107-0.22v-1.956c0-0.133 0.064-0.177 0.152-0.112 0.832 0.551 1.803 0.792 2.683 0.792 1.056 0 1.496-0.44 1.496-1.035 0-0.484-0.307-0.903-1.649-1.607-1.893-0.907-2.685-1.827-2.685-3.369 0-1.716 1.341-3.147 3.673-3.147 1.147 0 1.952 0.176 2.392 0.373 0.109 0.067 0.133 0.176 0.133 0.264v1.827c0 0.111-0.067 0.177-0.2 0.133-0.592-0.352-1.467-0.573-2.319-0.568z"
            ></path>
          </svg>

          <h4 className="skills__details--name">Photoshop</h4>
        </div>
      </div>
    </section>
  );
};

export default Skills;
