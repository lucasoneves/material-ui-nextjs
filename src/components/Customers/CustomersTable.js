"use client";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import EditIcon from "@mui/icons-material/Edit";
import {
  Avatar,
  Button,
  DialogContent,
  DialogActions,
  DialogTitle,
  TextField,
  IconButton,
  Box,
  Divider,
} from "@mui/material";
import { useState, useEffect } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import ReactFileReader from "react-file-reader";

import api from "@/services/customers";

import Title from "../Title/Title";
import Loading from "../Loading";
import Dialog from "@mui/material/Dialog";

export default function CustomersTable() {
  const [customers, setCustomers] = useState([]);
  const [customerToEdit, setCustomerToEdit] = useState({});
  const [pending, setPending] = useState(true);
  const [openEditModal, setOpenEditModal] = React.useState(false);

  function formatDateToBrazilian(date) {
    return new Date(date).toLocaleDateString("pt-BR", { timeZone: "UTC" });
  }

  function handleClickOpen() {
    setOpenEditModal(true);
  }
  function handleCloseModal() {
    setOpenEditModal(false);
  }

  function handleEditCustomer(customer) {
    setCustomerToEdit(customer);
    handleClickOpen();
  }

  async function getCustomersList() {
    try {
      setPending(true);
      const data = await api.get("/customers");
      setCustomers(data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  }

  function handleChangeName(e) {
    console.log(e.target.value);
    setCustomerToEdit({
      ...customerToEdit,
      name: e.target.value,
    });
  }

  function handleChangeAvatar(files) {
    console.log(files);
    setCustomerToEdit({
      ...customerToEdit,
      avatar: files.base64,
    });
  }

  useEffect(() => {
    getCustomersList();

    return () => {
      setPending(false);
    };
  }, []);

  return pending ? (
    <Loading />
  ) : (
    <React.Fragment>
      <Title>Clients List</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Created At</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Avatar</TableCell>
            <TableCell align="right">Editar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.length > 0 &&
            customers.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>{formatDateToBrazilian(row.createdAt)}</TableCell>
                <TableCell>{row.name}</TableCell>
                {/* <TableCell align="right">{`$${row.avatar}`}</TableCell> */}
                <TableCell>
                  <Avatar style={{ display: "inline-flex" }} src={row.avatar} />
                </TableCell>
                <TableCell align="right">
                  <Button onClick={() => handleEditCustomer(row)}>
                    <EditIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <Dialog fullWidth onClose={handleCloseModal} open={openEditModal}>
        <DialogTitle>Edit client</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleCloseModal}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.black,
          }}
        ></IconButton>
        <DialogContent sx={{ padding: "0 20px" }}>
          <form>
            <Box
              display={"flex"}
              gap={"12px"}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ paddingBottom: "20px" }}
            >
              <Avatar
                sx={{ width: 120, height: 120 }}
                src={customerToEdit.avatar}
              />
              <ReactFileReader
                fileTypes={[".png", ".jpg"]}
                base64={true}
                handleFiles={handleChangeAvatar}
              >
                <Button
                  component="label"
                  role={undefined}
                  variant="contained"
                  tabIndex={-1}
                  startIcon={<CloudUploadIcon />}
                >
                  Change avatar
                </Button>
              </ReactFileReader>

              <Box display={"flex"} gap={"2px"}>
                <Button>
                  <Box display={"flex"} alignItems={"center"} gap={"6px"}></Box>
                </Button>
              </Box>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
              <TextField
                onChange={handleChangeName}
                fullWidth
                label="Name"
                value={customerToEdit.name}
              />
            </Box>
            <DialogActions>
              <Button onClick={handleCloseModal}>Fechar</Button>
              <Button type="submit" color="success" variant="contained">
                Salvar
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
