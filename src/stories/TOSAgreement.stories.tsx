import { FormControlLabel, Link, Switch, Typography } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { TOSAgreement } from "../components/TOSAgreement";

export default {
  title: "Components/TOSAgreement",
  component: TOSAgreement,
} as ComponentMeta<typeof TOSAgreement>;

export const Default: ComponentStory<typeof TOSAgreement> = () => {
  const [accepted, setAccepted] = React.useState<boolean>(false);

  const handleChange = () => {
    setAccepted((prev) => !prev);
  };

  const SwitchLabel = (
    <Typography color="text.secondary">
      Dichiaro di aver letto e accettato l’
      <Link underline="hover" href="#">
        Informativa Privacy
      </Link>{" "}
      e i{" "}
      <Link underline="hover" href="#">
        Termini e condizioni d’uso
      </Link>{" "}
      di MUI Italia
    </Typography>
  );

  return (
    <TOSAgreement
      productName="MUI Italia"
      description="Prima di entrare, leggi e accetta l’Informativa Privacy e i Termini e condizioni d’uso. Potrai consultarli di nuovo quando vuoi: li trovi sempre in fondo alla pagina."
      onConfirm={() => console.log("Confermato")}
      confirmBtnDisabled={!accepted}
    >
      <FormControlLabel
        control={
          <Switch checked={accepted} onChange={handleChange} name="accepted" />
        }
        label={SwitchLabel}
      />
    </TOSAgreement>
  );
};
