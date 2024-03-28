import { Avatar, Typography } from "@mui/material";
import { red } from "@mui/material/colors";

function Story({ avatar, username }) {
  return (
    <div>
      <Avatar
        src={avatar}
        alt={username}
        sx={{
          width: "56px",
          height: "56px",
          cursor: "pointer",
          // 확대 효과
          ":hover": {
            transform: "scale(1.1)",
          },
          transition: "transform 0.2s ease-out",

          // 빨간 테두리
          "> img": {
            border: `2px solid ${red[500]}`,
            borderRadius: "50%",
            padding: "1.5px",
          },
        }}
      />
      <Typography variant="body2" noWrap align="center" sx={{ width: "56px" }}>
        {username}
      </Typography>
    </div>
  );
}
export default Story;
