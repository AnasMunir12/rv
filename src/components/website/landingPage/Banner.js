import { Box, Grid, IconButton, Typography, Rating } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";

function Banner() {
  return (
    <>
      <Box sx={{ height: "100%" }}>
        <Grid container sx={{ position: "relative" }}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              sx={{
                bgcolor: "var(--bg-color)",
                height: { xs: "auto", md: "100%" },
                width: { xs: "100%", md: "420px", lg: "600px", xl: "800px" },
                position: { xs: "revert", md: "absolute" },
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignContent: "center",
                px: { xs: 2, sm: 6 },
                gap: 1,
                py: { xs: 4, md: 0 },
                pt: { xs: 10, md: 0 },
              }}
            >
              <Box
                display="flex"
                justifyContent={{ xs: "center", md: "start" }}
                gap={1}
              >
                <IconButton disableRipple sx={{ p: 0 }}>
                  <Box component="img" src="/images/icons/bannerline.svg" />
                </IconButton>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: { xs: "var(--font-xs)", lg: "var(--font-sm)" },
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--white-text)",
                    fontWeight: 500,
                    textTransform: "uppercase",
                  }}
                >
                  Digitally Streamlined Consignment Process
                </Typography>
              </Box>

              <Box>
                <Typography
                  sx={{
                    fontSize: {
                      xs: "var(--font-lg)",
                      md: "var(--font-xl)",
                      lg: "var(--font-1xl)",
                    },
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--white-text)",
                    fontWeight: 600,
                    lineHeight: "59px",
                  }}
                >
                  Sell Your RV
                  <br />
                  <span style={{ fontWeight: 400 }}> with Zero Hassle </span>
                </Typography>
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontSize: "var(--font-md)",
                    color: "var(--white-text)",
                    fontWeight: 400,
                    lineHeight: "26px",
                    fontFamily: "var(--font-family-lato)",
                    textAlign: { xs: "center", sm: "start" },
                  }}
                >
                  Our advanced digital process handles everything from first
                  contact to RV drop-off with ease and accuracy.
                </Typography>
              </Box>
              <Box
                sx={{
                  width: "160px",
                  height: "50px",
                  backgroundColor: "var(--icon-color)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid var(--bg-color)",
                  borderRadius: "3px",
                  mt: 3,
                  mx: { xs: "auto", sm: 0 },
                  transition: "all 0.3s ease-in-out",
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "var(--white-text)",
                    borderColor: "var(--icon-color)",
                    "& .hover-text": {
                      color: "var(--icon-color)",
                    },
                  },
                }}
              >
                <Typography
                  className="hover-text"
                  sx={{
                    fontSize: "var(--font-sm)",
                    fontFamily: "var(--font-family-montserrat)",
                    fontWeight: 600,
                    color: "var(--white-text)",
                    transition: "color 0.3s ease-in-out",
                  }}
                >
                  Sell Your RV
                </Typography>
              </Box>

              {/* main box */}
              <Box
                display={"flex"}
                flexDirection={{ xs: "column", sm: "row" }}
                alignItems={"center"}
                gap={3}
                mt={4}
              >
                <Box>
                  <AvatarGroup
                    max={3}
                    sx={{
                      "& .MuiAvatar-root": {
                        width: 40, // custom size
                        height: 40,
                        fontSize: "14px",
                        border: "2px solid white", // border around each avatar
                        backgroundColor: "var(--icon-color)",
                      },
                    }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/images/landingpage/avator1.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                    <Avatar
                      alt="Travis Howard"
                      src="/images/landingpage/avator2.png"
                    />
                  </AvatarGroup>
                </Box>

                <Box display={"flex"} flexDirection={"row"} gap={1}>
                  {/* ratings */}
                  <Box
                    display={"flex"}
                    flexDirection={{ xs: "row", sm: "column" }}
                    alignItems={"center"}
                    gap={{ xs: 1, sm: 0 }}
                  >
                    <Typography
                      sx={{
                        fontSize: "var(--font-sm)",
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 500,
                        color: "var(--white-text)",
                      }}
                    >
                      4.9 / 5.0
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "var(--font-sm)",
                          sm: "var(--font-sm)",
                        },
                        fontFamily: "var(--font-family-montserrat)",
                        fontWeight: 500,
                        color: "var(--white-text)",
                      }}
                    >
                      RATINGS
                    </Typography>
                  </Box>
                  <Box>
                    <Rating name="size-medium" defaultValue={5} />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 8 }}>
            <Box
              component="img"
              src="/images/landingpage/banner.png"
              sx={{
                width: "100%",
                height: { xs: "500px", sm: "100%" },
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default Banner;
