import React, { useEffect, useState } from "react";
import { PortfolioList } from "./portfolioList/PortfolioList";
import {
  Backdrop,
  Modal,
  Fade,
  Typography,
  Button,
  Link,
  CircularProgress,
} from "@mui/material";
import { Close, GitHub } from "@mui/icons-material";

import { fullStackPortfolio, cursosPortfolio } from "../../data";
import {
  fullStackPortfolioEnglish,
  cursosPortfolioEnglish,
} from "../../dataEnglish";

import "./portfolio.scss";
import { Box } from "@mui/system";

export const Portfolio = ({ lenguage }) => {
  const [selected, setSelected] = useState("fullstack");
  const [data, setData] = useState([]);
  const [selectedData, setSelectedData] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [loadingPicture, setLoadingPicture] = useState(false);

  const handleOpenModal = (dataPortfolio) => {
    setOpenModal(!openModal);
    setSelectedData(dataPortfolio);
  };

  const list = [
    {
      id: "fullstack",
      titleSpanich: "Trabajos",
      titleEnglish: "Works",
      key: 1,
    },
    {
      id: "cursos",
      titleSpanich: "Cursos",
      titleEnglish: "Courses",
      key: 2,
    },
  ];
  useEffect(() => {
    setLoadingPicture(false);
  }, [loadingPicture]);

  useEffect(() => {
    setLoadingPicture(true);

    switch (selected) {
      case "fullstack":
        lenguage === true
          ? setData(fullStackPortfolioEnglish)
          : setData(fullStackPortfolio);
        break;
      case "cursos":
        lenguage === true
          ? setData(cursosPortfolioEnglish)
          : setData(cursosPortfolio);

        break;
      default:
        setData(fullStackPortfolio);
    }
  }, [selected, lenguage]);

  return (
    <div className="portfolio" id="portfolio">
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={handleOpenModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box className="boxModal">
            <Box className="boxImg">
              <a href={selectedData.link}>
                <img
                  className="modalImg"
                  src={selectedData.img}
                  alt={selectedData.title}
                />
              </a>
              {lenguage === true ? (
                <h3 className="modalText">Go to link</h3>
              ) : (
                <h3 className="modalText">Ir al link</h3>
              )}
            </Box>
            <Box>
              <Typography
                id="transition-modal-description"
                sx={{ mt: 3, p: 3 }}
              >
                {selectedData.text}
                <Link href={selectedData.subLink}> {selectedData.subLink}</Link>
              </Typography>
              <Typography id="transition-modal-description" sx={{ m: 2 }}>
                <Link
                  variant="body2"
                  underline="hover"
                  href={selectedData.github}
                >
                  {selectedData.github && <GitHub />} {selectedData.github}
                </Link>
              </Typography>
            </Box>
            <Button className="closeButton" onClick={handleOpenModal}>
              <Close />
            </Button>
          </Box>
        </Fade>
      </Modal>
      <h1>
        <img src="assets/portfolio.png" alt="portfolio" /> Portfolio
      </h1>
      <ul>
        {list.map((item, i) => {
          return (
            <PortfolioList
              onClick={handleOpenModal}
              title={lenguage === true ? item.titleEnglish : item.titleSpanich}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              key={i}
            />
          );
        })}
      </ul>
      <div className="container">
        {loadingPicture === false
          ? data.map((dat, i) => (
              <div
                className="item"
                key={i}
                onClick={() => handleOpenModal(dat)}
              >
                <img src={dat.img} alt={dat.title} />
                <h3>{dat.title}</h3>
              </div>
            ))
          : data.map((dat, i) => (
              <div className="itemCargando" key={i}>
                <CircularProgress color="secondary" />
              </div>
            ))}
      </div>
    </div>
  );
};
