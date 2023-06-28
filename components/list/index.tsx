"use client";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";

export default function ListEpisode({
  items,
  title,
}: {
  items: string[];
  title: string;
}) {
  return (
    <List
      sx={{
        width: "100%",
        bgcolor: "background.paper",
        position: "relative",
        overflow: "auto",
        maxHeight: 440,
        "& ul": { padding: 0 },
      }}
      subheader={<li />}
    >
      {[0].map((item) => (
        <li key={`section-${item}`}>
          <ul>
            <ListSubheader>{title}</ListSubheader>
            {items.map((item, index) => (
              <ListItem key={`item-${index}-${item}`}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}
