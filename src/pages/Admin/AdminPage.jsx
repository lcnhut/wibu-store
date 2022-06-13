import {
  Button,
  Collapse,
  Image,
  Input,
  Modal,
  Space,
  Spin,
  Table,
  Tag,
} from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddProductForm } from "../../components";
import {
  addProductAsync,
  deleteProductAsync,
  getAllAsync,
} from "../../store/productSlice";
import "./AdminPage.scss";

const { Panel } = Collapse;

const AdminPage = () => {
  const productData = useSelector((state) => state.product.list);
  const isLoading = useSelector((state) => state.product.isLoading);

  const [product, setProduct] = useState(productData);
  const [value, setValue] = useState("");

  const [visibleAddForm, setVisibleAddForm] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [idToDeleteProduct, setIdToDeleteProduct] = useState();

  const handleDelete = () => {
    setIsModalVisible(false);
    dispatch(deleteProductAsync(idToDeleteProduct));
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAsync());
  }, []);

  // Update data after search
  useEffect(() => {
    setProduct(productData);
  }, [productData]);

  const setColorTag = (index) => {
    let color = "";
    switch (index) {
      case 0:
        color = "volcano";
        break;
      case 1:
        color = "blue";
        break;
      case 2:
        color = "cyan";
        break;
      case 3:
        color = "volcano";
        break;
      default:
        color = "cyan";
    }
    return color;
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => {
        return (
          <Image
            width={100}
            src={record.image}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
          />
        );
      },
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: "In Stock",
      dataIndex: "inStock",
      key: "inStock",
      sorter: (a, b) => a.inStock - b.inStock,
      render: (_, record) => {
        return (
          <>
            <b>Total: {record.inStock}</b>
            <Collapse ghost>
              <Panel header={<Tag color="green">In Stock</Tag>}>
                {record.colors.map((colorItem, index) => {
                  let isStock = false;
                  colorItem.sizes.forEach((sizeItem) => {
                    if (sizeItem.inStock !== 0) {
                      isStock = true;
                    } else {
                      isStock = false;
                    }
                  });
                  return (
                    isStock && (
                      <div style={{ marginBottom: "5px" }}>
                        <Tag color={setColorTag(index)} key={index}>
                          {colorItem.color.toUpperCase()}
                        </Tag>
                      </div>
                    )
                  );
                })}
              </Panel>
            </Collapse>
          </>
        );
      },
    },
    Table.SELECTION_COLUMN,
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: (id) => {
        return (
          <Space size="middle">
            <Button className="primary__button" type="primary" ghost>
              Edit
            </Button>
            <Button
              onClick={() => {
                setIdToDeleteProduct(id);
                setIsModalVisible(true);
              }}
              type="danger"
              ghost
            >
              Delete
            </Button>
          </Space>
        );
      },
    },
  ];

  // Handle search product by name
  const onSearch = (value) => {
    const currValue = value;
    setValue(value);
    const filteredData = productData.filter(
      (entry) =>
        entry.name.toLowerCase().includes(currValue) ||
        entry.name.toUpperCase().includes(currValue) ||
        entry.price.includes(currValue)
    );
    setProduct(filteredData);
  };

  // Add product form
  const showModalAddForm = () => {
    setVisibleAddForm(true);
  };

  const onCancelAddForm = () => {
    setVisibleAddForm(false);
  };

  const handleSubmitAddForm = (values) => {
    setConfirmLoading(isLoading);
    const result = dispatch(addProductAsync(values));
    if (result) {
      setConfirmLoading(isLoading);
      setVisibleAddForm(isLoading);
    }
  };

  return (
    <Spin tip="Loading..." size="large" spinning={isLoading}>
      <div className="admin__page container-page">
        <Input
          className="search__input"
          placeholder="Search product"
          value={value}
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button type="primary" ghost onClick={showModalAddForm}>
          Add new product
        </Button>
        <AddProductForm
          handleSubmitForm={handleSubmitAddForm}
          visible={visibleAddForm}
          confirmLoading={confirmLoading}
          onCancel={onCancelAddForm}
        />
        <Table
          className="product__table"
          dataSource={product}
          columns={columns}
        />
        <Modal
          title="Delete Product"
          visible={isModalVisible}
          onOk={handleDelete}
          onCancel={handleCancel}
        >
          This product will be delete?
        </Modal>
      </div>
    </Spin>
  );
};

export default AdminPage;
