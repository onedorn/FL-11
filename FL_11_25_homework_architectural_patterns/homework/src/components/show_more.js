class ShowMore {
    renderLoadMore(users, all_users) {
        const disabled = 'disabled';
        return `
            <div class="text-center show">
                <p class="load-more__paragraph">Displayed ${users} users out of ${all_users}</p>
                <button type="text" class="load_more" ${users <= 0 ? disabled : null}>Load more</button>
            </div>
        `;
    };
};

export default ShowMore;