export function toUserResponse(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
    createdAt: user.createdAt,
  };
}

export function toSessionResponse(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
    name: user.name,
  };
}

export function toRegisterResponse(user) {
  return {
    id: user.id,
    username: user.username,
    email: user.email,
  };
}