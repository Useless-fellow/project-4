const res = fetch("https://jsonplaceholder.typicode.com/users");
res
  .then((data) => data.json())
  .then((data1) => {
    for (var i = 0; i < data1.length; i++) {
      const div = document.createElement("div");
      div.innerHTML = `<div class="row row-cols-5 row-cols-md-4 ">
        <div class="col">
          <div class="card">
            <div class="card-body">
              <p class="card-text"><b><i>Name: ${data1[i].name}</i></b></p>
              <p class="card-text"><b><i>Email: ${data1[i].email}</i></b></p>
              <p class="card-text"><b><i>Street: ${data1[i].address.street}</b></p>
              <p class="card-text"><b><i>City: ${data1[i].address.city}</i></b></p>
              
            </div>
          </div>
        </div>
        </div>`;
      document.body.append(div);
    }
  });
