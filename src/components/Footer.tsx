import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  footer: {
    color: "#ebf6f7",
    backgroundColor: "#000000",
    width: "100%",
    position: "absolute",
    bottom:"0px",
    height:"20px",
    verticalAlign:"middle",
    textAlign:"center",
  },
});

function Footer() {
  const classes = useStyles();
  return <div className={classes.footer}>@2022</div>;
}

export default Footer;