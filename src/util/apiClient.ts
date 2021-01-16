import userData from '../data/userData';

const headers = () =>
    new Headers({ Authorization: `Bearer ${userData.personalToken}` });

export default {
    getAccountInfo: () => createRequest('account', 'GET'),
};

const createRequest = async (path: string, method: string, body?: any) => {
    const requestOptions = {
        method: method,
        headers: headers(),
        redirect: 'follow' as const,
        body: JSON.stringify(body),
    };

    const response = await fetch(
        `https://lichess.org/api/${path}`,
        requestOptions,
    );
    const data = await parseResponse(response);
    if (response.status >= 400) {
        if (data?.message) {
            throw new Error(data.message);
        }
        throw new Error(
            `Request failed: ${response.status} ${response.statusText}`,
        );
    }

    return data;
};

const parseResponse = (response: Response): Promise<any> => {
    if (isJsonResponse(response)) {
        return response.json();
    }
    return response.text();
};

const isJsonResponse = (response: Response) =>
    response.headers.has('content-type') &&
    response.headers.get('content-type')?.includes('application/json');
