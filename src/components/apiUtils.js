import request from "superagent";

const URL = 'https://personal-ghosts.herokuapp.com'

export async function getGhosts() {
    const { body } = await request.get(`${URL}/ghosts`);
    return body;
}

export async function getCategories() {
    const { body } = await request.get(`${URL}/categories`);
    return body;
}

export async function getGhost(id) {
    const { body } = await request.get(`${URL}/ghosts/${id}`);
    return body;
}

export async function makeGhost(oneLonelyGhost) {
    const { body } = await request.post(`${URL}/ghosts/`).send(oneLonelyGhost);

    return body;
}

export async function deleteGhost(id) {
    const { body } = await request.delete(`${URL}/ghosts/${id}`);

    return body;
}

export async function updateGhost(id, oneLonelyGhost) {
    const { body } = await request.put(`${URL}/ghosts/${id}`).send(oneLonelyGhost);

    return body;
}

export function getCategoryId(ghost, categories) {
    const category = categories.find(category => ghost.category_id === category.category_name);

    return category.id;
}

export function handleCategoryName(category_id) {
    
    if(category_id === 1) {
        return 'skill'
    } else if(category_id === 2) {
        return 'food'
    } else return 'care';

}

export function handleTrustworthyDisplay(trustworthy) {
    
    if(trustworthy === true) {
        return 'yes'
    } else return 'no';
}