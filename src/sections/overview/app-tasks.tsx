import { useState, MouseEvent } from "react";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";
import Popover from "@mui/material/Popover";
import MenuItem from "@mui/material/MenuItem";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import FormControlLabel from "@mui/material/FormControlLabel";
import Iconify from "src/components/iconify";

// ----------------------------------------------------------------------

interface Task {
  id: string;
  name: string;
}

interface AnalyticsTasksProps {
  title: string;
  subheader?: string;
  list: Task[];
  sx?: object;
}

export default function AnalyticsTasks({
  title,
  subheader,
  list,
  sx,
  ...other
}: AnalyticsTasksProps) {
  const [selected, setSelected] = useState<string[]>(["2"]);

  const handleClickComplete = (taskId: string) => {
    const tasksCompleted = selected.includes(taskId)
      ? selected.filter((value) => value !== taskId)
      : [...selected, taskId];

    setSelected(tasksCompleted);
  };

  return (
    <Card sx={sx} {...other}>
      <CardHeader title={title} subheader={subheader} />

      {list.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          checked={selected.includes(task.id)}
          onChange={() => handleClickComplete(task.id)}
        />
      ))}
    </Card>
  );
}

// ----------------------------------------------------------------------

interface TaskItemProps {
  task: Task;
  checked: boolean;
  onChange: () => void;
}

function TaskItem({ task, checked, onChange }: TaskItemProps) {
  const [open, setOpen] = useState<HTMLElement | null>(null);

  const handleOpenMenu = (event: MouseEvent<HTMLElement>) => {
    setOpen(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setOpen(null);
  };

  const handleMarkComplete = () => {
    handleCloseMenu();
    console.info("MARK COMPLETE", task.id);
  };

  const handleShare = () => {
    handleCloseMenu();
    console.info("SHARE", task.id);
  };

  const handleEdit = () => {
    handleCloseMenu();
    console.info("EDIT", task.id);
  };

  const handleDelete = () => {
    handleCloseMenu();
    console.info("DELETE", task.id);
  };

  return (
    <>
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          pl: 2,
          pr: 1,
          py: 1,
          "&:not(:last-of-type)": {
            borderBottom: (theme) => `dashed 1px ${theme.palette.divider}`,
          },
          ...(checked && {
            color: "text.disabled",
            textDecoration: "line-through",
          }),
        }}
      >
        <FormControlLabel
          control={<Checkbox checked={checked} onChange={onChange} />}
          label={task.name}
          sx={{ flexGrow: 1, m: 0 }}
        />

        <IconButton
          color={open ? "inherit" : "default"}
          onClick={handleOpenMenu}
        >
          <Iconify icon="eva:more-vertical-fill" />
        </IconButton>
      </Stack>

      <Popover
        open={!!open}
        anchorEl={open}
        onClose={handleCloseMenu}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={handleMarkComplete}>
          <Iconify icon="eva:checkmark-circle-2-fill" sx={{ mr: 2 }} />
          Mark Complete
        </MenuItem>

        <MenuItem onClick={handleEdit}>
          <Iconify icon="solar:pen-bold" sx={{ mr: 2 }} />
          Edit
        </MenuItem>

        <MenuItem onClick={handleShare}>
          <Iconify icon="solar:share-bold" sx={{ mr: 2 }} />
          Share
        </MenuItem>

        <MenuItem onClick={handleDelete} sx={{ color: "error.main" }}>
          <Iconify icon="solar:trash-bin-trash-bold" sx={{ mr: 2 }} />
          Delete
        </MenuItem>
      </Popover>
    </>
  );
}
