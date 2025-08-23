import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // ✅ react-icons

const Sidebar = () => {
  const [openSpecialities, setOpenSpecialities] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);
  const [openBranches, setOpenBranches] = useState(false);

  return (
    <div
      style={{
        width: "250px",
        backgroundColor: "#a38856", // brownish color
        color: "white",
        minHeight: "100vh",
        padding: "10px",
        fontFamily: "sans-serif",
      }}
    >
      <Nav className="flex-column">
        <Nav.Link href="#" className="text-white">
          HOME
        </Nav.Link>

        {/* Specialities dropdown */}
        <div
          onClick={() => setOpenSpecialities(!openSpecialities)}
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>SPECIALITIES</span>
          {openSpecialities ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openSpecialities && (
          <Nav className="flex-column ms-3">
            <Nav.Link href="#" className="text-white">
              Cardiac Care
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Digestive Health
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Mental Wellness
            </Nav.Link>
          </Nav>
        )}

        <Nav.Link href="#" className="text-white">
          YOGA
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          SWARN BINDU PRASHANA
        </Nav.Link>

        {/* About dropdown */}
        <div
          onClick={() => setOpenAbout(!openAbout)}
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>ABOUT US</span>
          {openAbout ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openAbout && (
          <Nav className="flex-column ms-3">
            <Nav.Link href="#" className="text-white">
              Our Mission
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Team
            </Nav.Link>
          </Nav>
        )}

        {/* Branches dropdown */}
        <div
          onClick={() => setOpenBranches(!openBranches)}
          style={{ cursor: "pointer" }}
          className="d-flex justify-content-between align-items-center"
        >
          <span>OUR BRANCHES</span>
          {openBranches ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {openBranches && (
          <Nav className="flex-column ms-3">
            <Nav.Link href="#" className="text-white">
              Pune
            </Nav.Link>
            <Nav.Link href="#" className="text-white">
              Mumbai
            </Nav.Link>
          </Nav>
        )}

        <Nav.Link href="#" className="text-white">
          SHOP
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          BLOG
        </Nav.Link>
        <Nav.Link href="#" className="text-white">
          BOOK APPOINTMENT
        </Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
