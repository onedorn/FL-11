function Search() {
    this.createHeader = function() {
        const header = document.createElement('header');
        header.classList.add('text-center');
        header.innerHTML = `
            <form>
                <label for="search" class="m-0 mr-3">Search by name: </label>
                <input type="text" name="search" id="search" placeholder="Enter user name...">
            </form>      
        `;
        document.querySelector('.root').appendChild(header);
    };
}

export default Search;