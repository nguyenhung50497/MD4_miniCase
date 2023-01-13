const searchBlog = (value) => {
    axios.get('/users/search-blog', {
        params:{
            keyword: value
        }
    }).then (res =>{
        let blog = res.data;
        let html = '';
        console.log(blog)
        blog.forEach((item, index) => {
            html += ``
        })

        document.getElementById('list-blog').innerHTML = html;
    })
}