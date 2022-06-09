import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { CTA } from "@types";
import circle from "./circle.svg";

export interface InfoblockProps {
  overline?: string;
  title: string;
  content?: string;
  ctaPrimary?: CTA;
  ctaSecondary?: CTA;
  inverse: boolean;
  image: string;
  altText?: string;
  imageShadow: boolean;
}

export const Infoblock = ({
  overline,
  title,
  content,
  ctaPrimary,
  ctaSecondary,
  inverse = false,
  image,
  altText = "info image",
  imageShadow,
}: InfoblockProps) => (
  <Box>
    <Container maxWidth="xl">
      <Box
        sx={{
          display: "grid",
          gap: 3,
          gridTemplateColumns: {
            xs: "repeat(6, minmax(0, 1fr))",
            md: "repeat(12, minmax(0, 1fr))",
          },
          py: {
            xs: 4,
            sm: 4,
            md: 8,
          },
        }}
      >
        <Box
          gridColumn={{
            xs: "span 6",
            md: inverse ? "7 / span 5" : "2 / span 5",
          }}
          gridRow={{
            xs: "auto",
            md: 1,
          }}
          my="auto"
        >
          <Stack spacing={4}>
            <Stack spacing={2}>
              {overline && (
                <Typography variant="overline" color="text.secondary">
                  {overline}
                </Typography>
              )}
              <Typography variant="h4" color="text.primary">
                {title}
              </Typography>
              {content && (
                <Typography color="text.primary">{content}</Typography>
              )}
            </Stack>
            {(ctaPrimary || ctaSecondary) && (
              <Stack direction="row" spacing={2}>
                {ctaPrimary && (
                  <Button
                    aria-label={ctaPrimary.title}
                    variant="contained"
                    href={ctaPrimary.href}
                  >
                    {ctaPrimary.label}
                  </Button>
                )}
                {ctaSecondary && (
                  <Button
                    aria-label={ctaSecondary.title}
                    variant="outlined"
                    href={ctaSecondary.href}
                  >
                    {ctaSecondary.label}
                  </Button>
                )}
              </Stack>
            )}
          </Stack>
        </Box>
        <Box
          gridColumn={{
            xs: "span 6",
            md: inverse ? "2 / span 5" : "7 / span 5",
          }}
          gridRow={{
            xs: "auto",
            md: 1,
          }}
          mr="40px"
        >
          <Box
            maxHeight="546px"
            maxWidth="100%"
            width="fit-content"
            position="relative"
            ml="auto"
            zIndex={1}
          >
            {imageShadow && (
              <Box
                width="100%"
                height="100%"
                sx={{
                  position: "absolute",
                  top: "40px",
                  zIndex: 2,
                  backgroundImage: `url(${circle})`,
                  backgroundSize: "40px",
                }}
              ></Box>
            )}
            <Box position="relative" width="auto" left="40px" zIndex={5}>
              <img
                alt={altText}
                src={image}
                style={{ maxWidth: "100%", maxHeight: "546px" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
);
