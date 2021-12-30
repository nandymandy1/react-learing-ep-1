import {
  Col,
  Row,
  Card,
  Table,
  Modal,
  Button,
  CardBody,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import api from "../services/api";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaPencilAlt, FaPlusCircle } from "react-icons/fa";
import Input from "../utils/Input";
import Textarea from "../utils/Textarea";

const MediaManager = () => {
  const [blogs, setBlogs] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [newBlog, setNewBlog] = useState({
    body: "",
    title: "",
  });

  const getBlogs = async () => {
    const { data } = await api.get("/posts?_limit=15");
    setBlogs(data);
  };

  const deletePost = async (id) => {
    await api.delete(`/posts/${id}`);
    toast("Blog deleted successfully...");
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  const handleChange = ({ target: { value, name } }) =>
    setNewBlog({ ...newBlog, [name]: value });

  const submitBlog = async () => {
    const { data } = await api.post("/posts", newBlog);
    toast("Blog added successfully...");
    console.log("DATA", data);
    setShowModal(!showModal);
    setBlogs([data, ...blogs]);
    setNewBlog({
      body: "",
      title: "",
    });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <>
      <Row className="my-3 mx-4">
        <Col sm={12} md={12}>
          <Card>
            <CardBody>
              <Button
                color="primary"
                className="btn-circle"
                onClick={() => setShowModal(!showModal)}
              >
                <FaPlusCircle color="#fff" />
              </Button>
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {blogs.map(({ id, title }) => (
                    <tr key={id}>
                      <th scope="row">{id}</th>
                      <td>{title}</td>
                      <td>
                        <Button
                          color="danger"
                          size="sm"
                          className="me-2"
                          onClick={() => deletePost(id)}
                        >
                          <FaTrashAlt />
                        </Button>
                        <Button color="info" size="sm">
                          <FaPencilAlt color="#fff" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Modal
        centered={true}
        backdrop="static"
        isOpen={showModal}
        toggle={() => setShowModal(!showModal)}
      >
        <ModalHeader toggle={() => setShowModal(!showModal)}>
          Add new blog post
        </ModalHeader>
        <ModalBody>
          <Input
            id="title"
            type="text"
            name="title"
            label="Title"
            placeholder="Title"
            value={newBlog.title}
            onChange={handleChange}
            className="form-control"
          />
          <Textarea
            id="body"
            name="body"
            label="Body"
            placeholder="Body"
            value={newBlog.body}
            onChange={handleChange}
            className="form-control"
          />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={submitBlog}>
            Add Blog
          </Button>{" "}
          <Button onClick={() => setShowModal(!showModal)}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default MediaManager;
