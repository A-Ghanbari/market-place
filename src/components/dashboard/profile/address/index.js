import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserAddressInfo } from "store/actions/profile";
import { USER_ADDRESS_INFO as addressEntity } from "tools/utils/entities";
import SupplierAddress from "components/dashboard/profile/address/SupplierAddress";
import WarehousesAddress from "components/dashboard/profile/address/WarehousesAddress";

export default function Address() {
  const { data, loading } = useSelector((s) => s[addressEntity.name]);

  useEffect(() => {
    getUserAddressInfo("");
  }, []);

  return (
    <>
      <SupplierAddress data={data.supplierAddress} />
      <WarehousesAddress />
    </>
  );
}
