import 'envkey'

export async function lambdaHandler(event, context) {
    return {
        'statusCode': 200,
        'body': JSON.stringify({
            message: 'hello world',
        })
    }
}
