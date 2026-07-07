
export default function requestId(req, res, next) {

    const id = crypto.randomUUID();
    req.requestId = id;

    next();
}