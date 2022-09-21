export function sendResults(VA: number, CPS: number, CFL: string,
    VD: number, font: string) {
  fetch(
      'https://api.knack.com/v1/pages/scene_2/views/view_3/records',
      {
        method: 'POST',
        headers: {
          'X-Knack-Application-Id': '60e72c1eedf8a1001e92aec1',
          'X-Knack-REST-API-Key': 'knack',
          'content-type': 'application/json',
        },
        body: JSON.stringify({
          field_2: VA,
          field_3: CPS,
          field_4: CFL,
          field_5: VD,
          field_6: font,
        }),
      },
  );
}
