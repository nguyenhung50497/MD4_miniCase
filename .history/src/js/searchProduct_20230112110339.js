const searchProduct = (value) => {
    axios.get('/home/search-blog', {
        params:{
            keyword: value
        }
    }).then (res =>{
        let blog = res.data;
        let html = '';
        console.log(blog)
        blog.forEach((item, index) => {
            html += '<tr>';
            html += `<td>${index + 1} </td>`;
            html += `<td>${item.user.name}</td>`;
            html += `<td>${item.date}</td>`;
            html += `<td>${item.title}</td>`;
            html += `<td>${item.status}</td>`;
            html += `<td>`
            html +=`<a onclick="return confirm('Are you sure you want to delete this blog?')" href="/admin/delete-blog/${item._id}/" class="btn btn-danger">Delete</a></td>`;
            html += '</tr>';
        })

        document.getElementById('list-blog').innerHTML = html;
    })
}