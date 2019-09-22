class ShowMore {
    renderLoadMore(users) {
        const disabled = 'disabled';
        return `
            <div class="text-center show">
                <p class="load-more__paragraph">Displayed ${users} users out of ${users}</p>
                <button type="text" class="load_more">Load more</button>
            </div>`;
    };
};

export default ShowMore;