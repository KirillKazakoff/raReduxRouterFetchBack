import Router from 'koa-router';
import db from '../../db/db';

const router = new Router();

router.get('/post/:id', async (ctx) => {
    ctx.response.body = db.getItem(ctx.params.id);
});

router.get('/posts', async (ctx) => {
    ctx.response.body = db.data;
});

router.post('/posts', async (ctx) => {
    db.add(ctx.request.body);
    ctx.response.status = 204;
});

router.put('/posts', async (ctx) => {
    db.edit(ctx.request.body);
    ctx.response.status = 204;
});

router.delete('/posts/:id', async (ctx) => {
    db.delete(ctx.params.id);
    ctx.response.status = 204;
});

export default router;
