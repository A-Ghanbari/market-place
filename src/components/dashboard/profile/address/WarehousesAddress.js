import { useEffect, useState } from "react"
import {
  addUserAddress,
  deleteUserAddress,
  updateUserAddress,
} from "store/actions/profile"
import Button from "components/utils/field/button"
import Icon from "components/utils/field/Icon"
import Form from "components/utils/form"
import Notification from "components/utils/notification"
import { FormCheckbox } from "components/utils/form/items/FormCheckbox"
import FormInput from "components/utils/form/items/FormInput"
import FormInputNumber from "components/utils/form/items/FormInputNumber"
import FormSelectProvinceAndCity from "components/utils/form/items/FormSelectProvinceAndCity"
import { ColumnGrid } from "components/utils/grid"
import Popconfirm from "components/utils/popconfirm"
import Table from "components/utils/table"
import CustomMap from "components/utils/map/CustomMap"
import FormTextArea from "components/utils/form/items/FormTextArea"
import { getUserAddressInfo } from "store/actions/profile"
import { USER_ADDRESS_INFO as addressEntity } from "tools/utils/entities"
import { useSelector } from "react-redux"
import Skeleton from "components/utils/skeleton"

const fieldCol = { xs: 24, sm: 12, md: 12, lg: 8, xl: 8, xxl: 8 }
export default function WarehousesAddress() {
  const [position, setPosition] = useState([0, 0])
  const [formValue, setFormValue] = useState([])
  const latLong = formValue?.latLong ? formValue?.latLong.split(",") : position

  const { data, loading } = useSelector((s) => s[addressEntity.name])

  useEffect(() => {
    getUserAddressInfo("")
  }, [formValue])

  const columns = [
    {
      title: "ردیف",
      key: "index",
      width: "5%",
      render: (text, record, index) => index + 1,
    },
    {
      title: "عنوان",
      key: "title",
      width: "5%",
    },
    {
      title: "استان",
      key: "provinceName",
      width: "5%",
    },
    {
      title: "شهر",
      key: "cityName",
      width: "5%",
    },
    {
      title: "آدرس",
      key: "address",
      width: "10%",
    },
    {
      title: "کدپستی",
      key: "postalCode",
      width: "5%",
    },
    {
      title: "تلفن",
      key: "phone",
      width: "5%",
    },
    {
      title: "مرجوعی",
      key: "isRetuendWarehouse",
      width: "5%",
      render: (f, r) => (f ? "بله" : "خیر"),
    },
    {
      title: "عملیات",
      key: "actions",
      width: "10%",
      render: (f, r) => (
        <div className="actions">
          <Icon
            key="edit"
            type="edit"
            title="ویرایش"
            onClick={() => {
              setFormValue(
                data?.supplierWarehouses.filter(
                  (item) => item.id === r.id
                )
              )
            }}
          />
          <Popconfirm
            title={`آیا از حذف انبار "${r.title} "اطمینان دارید؟`}
            onConfirm={() => deleteUserAddress({ ID: r.id })}
          >
            <Icon key="delete" type="delete" title="حذف انبار" />
          </Popconfirm>
        </div>
      ),
    },
  ]

  const onFinish = (values) => {
    if (position[0] === 0) {
      Notification.error("وارد کردن محل انبار روی نقشه الزامی می باشد.")
      return
    }
    const serviceModel = {
      latLong: position.toString(),
      ...values,
    }

    if (formValue.length) {
      serviceModel.ID = formValue[0].id
      updateUserAddress(serviceModel)
    } else {
      addUserAddress(serviceModel).then(() => { })
    }
  }
  if (!loading) {
    return (
      <div>
        <Form
          name="EditForm"
          autoComplete="off"
          onFinish={onFinish}
          initialValues={formValue[0]}
        >
          <div className="profile-tab-title">
            <h3>اطلاعات انبار</h3>
            <Button
              type={
                formValue.length
                  ? "primary-fail"
                  : "primary-success"
              }
              label={formValue.length ? "ویرایش" : "ایجاد"}
              name="submit"
              loading={loading}
              htmlType="submit"
            />
            {!!formValue.length && (
              <Button
                type="primary-accent"
                label={<Icon
                  key="emptyForm"
                  type="delete"
                  title=""
                  className=""
                  onClick={() => setFormValue([])}
                />}
                name="submit"
                loading={loading}
                shape="circle"
              />
            )}
          </div>
          <ColumnGrid col={fieldCol}>
            <FormInput name="title" label="عنوان" required={true} />
            <FormInputNumber
              name="phone"
              label="تلفن ثابت"
              required={true}
            />
            <FormInputNumber
              name="postalCode"
              label="کد پستی"
              required={true}
            />
            <FormSelectProvinceAndCity
              // provinceName="cityName"
              provinceLabel="استان"
              cityName="cityID"
              cityLabel="شهر"
              required={true}
            />
            <CustomMap
              setPosition={setPosition}
              position={latLong}
              popup="محل انبار"
            />
          </ColumnGrid>
          <FormTextArea name="address" label="آدرس" required={true} />
          <FormCheckbox label="انبار مرجوعی" name="isRetuendWarehouse" />
        </Form>

        <Table
          dataList={data?.supplierWarehouses}
          loading={loading}
          columns={columns}
        />
      </div>
    )
  }
  return (<Skeleton></Skeleton>)
}
