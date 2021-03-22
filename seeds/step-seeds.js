const { Steps } = require('../models');

const stepsData = [
  {
    step_text: 'Nunc rhoncus dui vel sem.',
    step_number: 1,
    user_id: 6,
    answer_id: 1
  },
  {
    step_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    step_number: 2,
    user_id: 6,
    answer_id: 8
  },
  {
    step_text: 'Aliquam erat volutpat. In congue.',
    step_number: 3,
    user_id: 3,
    answer_id: 10
  },
  {
    step_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    step_number: 4,
    user_id: 3,
    answer_id: 18
  },
  {
    step_text: 'In hac habitasse platea dictumst.',
    step_number: 5,
    user_id: 7,
    answer_id: 5
  },
  {
    step_text: 'Vivamus vestibulum sagittis sapien.',
    step_number: 6,
    user_id: 1,
    answer_id: 20
  },
  {
    step_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    step_number: 7,
    user_id: 6,
    answer_id: 7
  },
  {
    step_text: 'Sed vel enim sit amet nunc viverra dapibus.',
    step_number: 8,
    user_id: 7,
    answer_id: 4
  },
  {
    step_text: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat.',
    step_number: 9,
    user_id: 6,
    answer_id: 12
  },
  {
    step_text: 'Morbi a ipsum.',
    step_number: 10,
    user_id: 6,
    answer_id: 20
  },
  {
    step_text: 'Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
    step_number: 11,
    user_id: 3,
    answer_id: 14
  },
  {
    step_text: 'Donec ut mauris eget massa tempor convallis.',
    step_number: 12,
    user_id: 5,
    answer_id: 4
  },
  {
    step_text:
      'Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    step_number: 13,
    user_id: 4,
    answer_id: 9
  },
  {
    step_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
    step_number: 14,
    user_id: 5,
    answer_id: 14
  },
  {
    step_text: 'Quisque porta volutpat erat.',
    step_number: 15,
    user_id: 6,
    answer_id: 2
  },
  {
    step_text: 'Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
    step_number: 16,
    user_id: 8,
    answer_id: 2
  },
  {
    step_text:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
      step_number: 17,
    user_id: 2,
    answer_id: 20
  },
  {
    step_text: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis.',
    step_number: 18,
    user_id: 4,
    answer_id: 11
  },
  {
    step_text:
      'Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est.',
    user_id: 5,
    step_number: 19,
    answer_id: 13
  },
  {
    step_text:
      'Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.',
      step_number: 20,
    user_id: 9,
    answer_id: 16
  },
  {
    step_text: 'Curabitur convallis.',
    step_number: 2,
    user_id: 6,
    answer_id: 4
  },
  {
    step_text: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    step_number: 3,
    user_id: 4,
    answer_id: 10
  },
  {
    step_text: 'Morbi non quam nec dui luctus rutrum.',
    user_id: 3,
    step_number: 4,
    answer_id: 8
  },
  {
    step_text:
      'Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros. Vestibulum ac est lacinia nisi venenatis tristique.',
      step_number: 5,
    user_id: 8,
    answer_id: 10
  },
  {
    step_text:
      'Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.',
      step_number: 6,
    user_id: 1,
    answer_id: 15
  },
  {
    step_text: 'Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.',
    step_number: 7,
    user_id: 5,
    answer_id: 3
  },
  {
    step_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    user_id: 1,
    step_number: 8,
    answer_id: 15
  },
  {
    step_text: 'Nam tristique tortor eu pede.',
    step_number: 9,
    user_id: 4,
    answer_id: 16
  },
  {
    step_text: 'Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
    step_number: 8,
    user_id: 4,
    answer_id: 18
  },
  {
    step_text: 'Proin eu mi. Nulla ac enim.',
    step_number: 1,
    user_id: 4,
    answer_id: 10
  },
  {
    step_text: 'Sed ante. Vivamus tortor.',
    step_number: 1,
    user_id: 7,
    answer_id: 5
  },
  {
    step_text: 'Aliquam quis turpis eget elit sodales scelerisque.',
    user_id: 10,
    step_number: 1,
    answer_id: 1
  },
  {
    step_text: 'Donec quis orci eget orci vehicula condimentum.',
    user_id: 3,
    step_number: 1,
    answer_id: 19
  },
  {
    step_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    user_id: 5,
    step_number: 1,
    answer_id: 3
  },
  {
    step_text: 'Curabitur gravida nisi at nibh. In hac habitasse platea dictumst.',
    user_id: 10,
    step_number: 1,
    answer_id: 14
  },
  {
    step_text: 'Maecenas ut massa quis augue luctus tincidunt.',
    user_id: 10,
    step_number: 1,
    answer_id: 8
  },
  {
    step_text: 'Cras in purus eu magna vulputate luctus.',
    user_id: 10,
    step_number: 1,
    answer_id: 11
  },
  {
    step_text: 'Etiam vel augue. Vestibulum rutrum rutrum neque.',
    user_id: 8,
    step_number: 1,
    answer_id: 5
  },
  {
    step_text: 'Proin at turpis a pede posuere nonummy.',
    user_id: 8,
    step_number: 1,
    answer_id: 19
  },
  {
    step_text: 'Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl.',
    step_number: 1,
    user_id: 9,
    answer_id: 19
  },
  {
    step_text:
      'Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.',
      step_number: 1,
    user_id: 5,
    answer_id: 4
  },
  {
    step_text:
      'Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc.',
      step_number: 1,
    user_id: 2,
    answer_id: 11
  },
  {
    step_text: 'Vestibulum ac est lacinia nisi venenatis tristique.',
    step_number: 1,
    user_id: 4,
    answer_id: 6
  },
  {
    step_text: 'Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.',
    step_number: 1,
    user_id: 9,
    answer_id: 6
  },
  {
    step_text:
      'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam.',
      step_number: 1,
    user_id: 7,
    answer_id: 9
  },
  {
    step_text: 'Integer ac leo. Pellentesque ultrices mattis odio.',
    step_number: 1,
    user_id: 4,
    answer_id: 19
  },
  {
    step_text: 'Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.',
    step_number: 1,
    user_id: 10,
    answer_id: 1
  },
  {
    step_text:
      'Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.',
      step_number: 2,
    user_id: 2,
    answer_id: 19
  },
  {
    step_text: 'Proin risus. Praesent lectus.',
    step_number: 2,
    user_id: 10,
    answer_id: 1
  },
  {
    step_text: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus.',
    step_number: 2,
    user_id: 10,
    answer_id: 12
  }
];

const seedSteps = () => Steps.bulkCreate(stepsData);

module.exports = seedSteps;
