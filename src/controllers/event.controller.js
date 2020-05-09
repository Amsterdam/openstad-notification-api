import httpStatus from 'http-status';
import db from '../utils/sequelize';

const Event = db.event;

/**
 * Load event and append to req.
 */
async function load(req, res, next, id) {
    try {
        const eventFoundResponse = await Event.findById(id);
        if (!eventFoundResponse) {
            const e = new Error('Event does not exist');
            e.status = httpStatus.NOT_FOUND;
            return next(e);
        }

        req.event = eventFoundResponse; // eslint-disable-line no-param-reassign
        return next();
    } catch (error) {
        return next(error);
    }
}

/**
 * Get event
 * @returns {Event}
 */
function get(req, res) {
    return res.json(req.event);
}

/**
 * Create new event
 * @property {string} req.body.eventName - The eventName of event.
 * @property {string} req.body.mobileNumber - The mobileNumber of event.
 * @returns {Event}
 */
function create(req, res, next) {
    const event = Event.build({
        eventName: req.body.eventName,
    });

    event.save()
        .then(savedEvent => res.json(savedEvent))
        .catch(e => next(e));
}

/**
 * Update existing event
 * @property {string} req.body.eventName - The eventName of event.
 * @property {string} req.body.mobileNumber - The mobileNumber of event.
 * @returns {Event}
 */
function update(req, res, next) {
    const event = req.event;
    event.eventName = req.body.eventName;
    event.mobileNumber = req.body.mobileNumber;

    event.save()
        .then(savedEvent => res.json(savedEvent))
        .catch(e => next(e));
}

/**
 * Get event list.
 * @property {number} req.query.skip - Number of events to be skipped.
 * @property {number} req.query.limit - Limit number of events to be returned.
 * @returns {Event[]}
 */
function list(req, res, next) {
    const { limit = 50 } = req.query;

    Event.findAll({ limit })
        .then(events => res.json(events))
        .catch(e => next(e));
}

/**
 * Delete event.
 * @returns {Event}
 */
function remove(req, res, next) {
    const event = req.event;
    const eventName = req.event.eventName;

    event.destroy()
        .then(() => res.json(eventName))
        .catch(e => next(e));
}

export default {
    load,
    get,
    create,
    update,
    list,
    remove,
};
