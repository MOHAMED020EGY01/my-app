'use client';
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { deleteUserAction } from "@/action/userAction";
import SpinnerLaod from "./Spinner";
import ModalEdit from "./ModalEdit";
import { DisplayDataProps, User } from "@/interface/UserInterface";
interface TableActionProps {
  user: User;
}
const TableAction = ({user}:TableActionProps)   => {
     const [loading, setLoading] = useState(false);
  return (
    <>
        <ModalEdit user={user} />
      <Button
        size={"icon"}
        onClick={async () => {
          setLoading(true);
          await deleteUserAction({ id: user.id });
          setLoading(false);
        }}
        variant="destructive"
        disabled={loading}
      >
        {loading ? <SpinnerLaod /> : <Trash2 size={12} />}
      </Button>
    </>
  );
}

export default TableAction;
