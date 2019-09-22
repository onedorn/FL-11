class ShowMore {
    renderLoadMore(users, all_users) {
        return `
            <div class="text-center show">
                <p class="load-more__paragraph">Displayed ${users} users out of ${all_users}</p>
                <button type="text" class="load_more"}>Load more</button>
            </div>
        `;
    };
};

export default ShowMore;