import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

function From() {
  return (
    <>
      <Box
        sx={{
          py: 6,
          px: { xs: 2, md: 8 },
        }}
      >
        <Grid container sx={{ width: "100%", height: "100%", display: "flex" }}>
          <Grid size={{ xs: 12, md: 5.5 }}>
            <Box
              sx={{
                bgcolor: "#212121",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 6,
                px: { xs: 2, md: 8 },
                borderTopLeftRadius: "10px",
                borderBottomLeftRadius: "10px",
              }}
            >
              <Box display="flex" flexDirection="column" gap={4}>
                <Typography
                  sx={{
                    fontSize: "var(--font-md)",
                    fontWeight: 600,
                    fontFamily: "var(--font-family-montserrat)",
                    background:
                      "linear-gradient(180deg, rgba(255, 200, 59, 0) 46%, rgba(255, 200, 59, 0.71) 46%)",
                    width: "120px",
                    color: "var(--white-text)",
                  }}
                >
                  Contact Form
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: "var(--font-basic)", md: "var(--font-lg)" },
                    fontWeight: 600,
                    fontFamily: "var(--font-family-montserrat)",
                    color: "var(--white-text)",
                  }}
                >
                  Contact Us Now
                </Typography>

                <Box display="flex" justifyContent="center" gap={4}>
                  <Box>
                    <Typography sx={{ color: "var(--white-text)" }}>
                      Name*
                    </Typography>
                    <TextField
                      required
                      label="Select RV"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#E1E1E63D" },
                          "&:hover fieldset": { borderColor: "#E1E1E63D" },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E1E1E63D",
                          },
                        },
                        "& label": { color: "#FFFFFF8A" },
                        "& label.Mui-focused": { color: "#FFFFFF8A" },
                      }}
                    />
                  </Box>
                  <Box>
                    <Typography sx={{ color: "var(--white-text)" }}>
                      Email*
                    </Typography>
                    <TextField
                      required
                      label="Enter Email"
                      variant="outlined"
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "#E1E1E63D" },
                          "&:hover fieldset": { borderColor: "#E1E1E63D" },
                          "&.Mui-focused fieldset": {
                            borderColor: "#E1E1E63D",
                          },
                        },
                        "& label": { color: "#FFFFFF8A" },
                        "& label.Mui-focused": { color: "#FFFFFF8A" },
                      }}
                    />
                  </Box>
                </Box>

                <Box>
                  <Typography sx={{ color: "var(--white-text)" }}>
                    Subject*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    label="E.g Winnebago"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#E1E1E63D" },
                        "&:hover fieldset": { borderColor: "#E1E1E63D" },
                        "&.Mui-focused fieldset": { borderColor: "#E1E1E63D" },
                      },
                      "& label": { color: "#FFFFFF8A" },
                      "& label.Mui-focused": { color: "#FFFFFF8A" },
                    }}
                  />
                </Box>
                <Box>
                  <Typography sx={{ color: "var(--white-text)" }}>
                    Message*
                  </Typography>
                  <TextField
                    fullWidth
                    required
                    label="Type Your message here"
                    variant="outlined"
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#E1E1E63D" },
                        "&:hover fieldset": { borderColor: "#E1E1E63D" },
                        "&.Mui-focused fieldset": { borderColor: "#E1E1E63D" },
                      },
                      "& label": { color: "#FFFFFF8A" },
                      "& label.Mui-focused": { color: "#FFFFFF8A" },
                    }}
                  />
                </Box>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      bgcolor: "var(--icon-color)",
                      color: "var(--white-text)",
                      fontSize: "var(--font-md)",
                      textTransform: "capitalize",
                      fontFamily: "var(--font-family-montserrat)",
                      p: "10px 35px",
                    }}
                  >
                    Send Now
                  </Button>
                </Box>
              </Box>
            </Box>

            <Box></Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6.5 }}>
            <Box
              component="img"
              src="/images/contact/bgimg.png"
              sx={{
                width: "100%",
                height: "100%",
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default From;
