
import overlayImage from "../../assets/images/checkout/checkout.png";

import Swal from "sweetalert2";
import './add-services.css'

const AddService = () => {
    const handleAddService = (e) => {
        e.preventDefault();
        const from = new FormData(e.target);
      const title =  from.get("title");
        const price = from.get("price");
        const image = from.get("image");
        const service_id = from.get("service_id");
        const message = from.get("message");
        
      if (!title || !price || !image || !service_id || !message) {
        Swal.fire({
          position: "center-center",
          icon: "error",
          title: "Please fill all of the input",
          showConfirmButton: false,
          timer: 1500,
        })
        return 
      }
      
      
      const data = new FormData()
      data.append('image', image)
      fetch(
        "https://api.imgbb.com/1/upload?key=54db20428616ae85e6c12b04f32dc595",
        {
          method: "POST",
          body: data,
        }
      )
        .then(res => res.json())
        .then(data => {
          const imageUrl = data?.data?.display_url;
          console.log(imageUrl)
          const addServiceInfo = { title, price, imageUrl, message, service_id };
          fetch("http://localhost:4000/services", {
            method: "Post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(addServiceInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                Swal.fire({
                  position: "center-center",
                  icon: "success",
                  title: "Service added successfully done",
                  showConfirmButton: false,
                  timer: 1500,
                });
                e.target.title.value = ''
                e.target.price.value = ''
                e.target.image.value = ""
                e.target.service_id.value = ""
                e.target.message.value = ""
              }
              
            })
            .catch((error) => {
              Swal.fire({
                position: "center-center",
                icon: "error",
                title: "Something is wrong",
                showConfirmButton: false,
                timer: 1500,
              });
            });
          
      })
    }
  return (
    <div>
      <div>
        <div className="relative rounded-md">
          <img src={overlayImage} className="w-full my-5 rounded-md" />
          <div className="imageOverlay2">
            <h1 className="text-white font-bold text-2xl lg:text-5xl">
              Add Service
            </h1>
          </div>
        </div>

        <form
          onSubmit={handleAddService}
          id="serviceFrom"
          className="grid grid-cols-1 lg:grid-cols-2 bg-slate-200 rounded-md shadow-md my-5 p-10 gap-5"
        >
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="title"
              className="grow"
              placeholder="Service title"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="price"
              className="grow"
              placeholder="Service price"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="file"
              name="image"
              className="grow"
              placeholder="Service imgage-url"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              name="service_id"
              className="grow"
              placeholder="Service id"
            />
          </label>
          <textarea
            name="message"
            className="col-span-2 h-[250px] rounded-md p-5 resize-none outline-0 border-0"
            placeholder="Service description"
          ></textarea>
          <button className="bg-[#ff3811] w-full px-5 py-3 text-white col-span-2">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddService