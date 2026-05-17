import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

type View =
  | "discover"
  | "popular"
  | "topRated"
  | "nowPlaying"
  | "fantasy"
  | "actors";

type Props = {
  username?: string;
  onLogout: () => void;
  onNavigate: (view: View) => void;
};

const SiteHeader = ({ username, onLogout, onNavigate }: Props) => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
        <Typography variant="h5" sx={{ flexGrow: 1 }}>
          Assignment 2 Movies App
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", alignItems: "center" }}>
          <Button color="inherit" onClick={() => onNavigate("discover")}>
            Discover
          </Button>
          <Button color="inherit" onClick={() => onNavigate("popular")}>
            Popular
          </Button>
          <Button color="inherit" onClick={() => onNavigate("topRated")}>
            Top Rated
          </Button>
          <Button color="inherit" onClick={() => onNavigate("nowPlaying")}>
            Now Playing
          </Button>
          <Button color="inherit" onClick={() => onNavigate("actors")}>
            Actors
          </Button>
          <Button color="inherit" onClick={() => onNavigate("fantasy")}>
            Fantasy Movie
          </Button>

          <Typography sx={{ ml: 2 }}>
            User: {username}
          </Typography>

          <Button color="inherit" onClick={onLogout}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default SiteHeader;